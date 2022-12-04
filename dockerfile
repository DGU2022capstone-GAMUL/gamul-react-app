# FROM node:16.16.0
# WORKDIR /app

# COPY package.json ./
# RUN npm install
# COPY ./ ./

# EXPOSE 3000
# CMD ["npm","run","start"]
# CMD ["npm","start"]

FROM node:latest as builder

# 작업 폴더를 만들고 npm 설치
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent

# 소스를 작업폴더로 복사하고 빌드
COPY . /usr/src/app
RUN npm run build

FROM nginx:latest
# nginx의 기본 설정을 삭제하고 앱에서 설정한 파일을 복사
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

# # 위에서 생성한 앱의 빌드산출물을 nginx의 샘플 앱이 사용하던 폴더로 이동
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# COPY fullchain.pem /etc/letsencrypt/live/gamul.shop/fullchain.pem
# COPY privkey.pem /etc/letsencrypt/live/gamul.shop/privkey.pem

# # 80포트 오픈하고 nginx 실행
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]