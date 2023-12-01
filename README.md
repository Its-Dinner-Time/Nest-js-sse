# Nest js SSE

Nest js로 SSE 구현하기

## 참고자료

- Chat GPT로 받은 코드
- [Nest js 공식문서](https://docs.nestjs.com/techniques/server-sent-events)
- [Nest js 예시 Repository](https://github.com/nestjs/nest/tree/master/sample/28-sse)
- [Event Emitter 활용](https://docs.nestjs.com/techniques/events)

## 목표

- 구독한 사람이 새 글을 썼을 때만 알림 띄우기
- 내 글에 댓글이 달렸을때 알림 띄우기
- 내가 등록한 글의 삭제일정이 (t: 지정된 시간) 전일때 알림 띄우기

## 상세 목표

~~- 사용자 테이블 (User), 게시글 테이블 (Post), 댓글 테이블 (Comment), 사용자 구독 정보 테이블 (UserSubscription) 생성 및 crud 작업~~

- 게시글 생성시 삭제일시 ( 생성일시로부터 1시간 뒤 ) 자동 등록

- 사용자 데이터 추가 (userA, userB)

  - 로그인, 회원가입은 구현하지 않는다.
  - userA는 userB를 구독한다.

- userB가 게시글 작성 시 userA에게 sse로 알림 전송

- userA가 userB의 글에 댓글을 추가할 시 userB에게 sse로 알림 전송

- userB가 등록한 게시글의 삭제 일시가 30분 전 일때 userB에게 sse로 알림 전송

## 개발도구

- [Nest js](https://docs.nestjs.com/)
- [Supabase](https://supabase.com/)
- [Rxjs](https://rxjs.dev/)

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# run on docker
$ docker-compose up --build

# run on docker ( daemon )
$ docker-compose up --build -d

# stop docker
$ docker-compose stop

# clear docker and volumes
$ docker-compose down --volumes
```
