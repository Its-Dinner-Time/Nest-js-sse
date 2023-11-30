# Nest js SSE

Nest js로 SSE 구현하기

## 참고자료

- Chat GPT로 받은 코드
- [Nest js 공식문서](https://docs.nestjs.com/techniques/server-sent-events)
- [Nest js 예시 Repository](https://github.com/nestjs/nest/tree/master/sample/28-sse)

## TODO

- 구독한 사람이 새 글을 썼을 때만 알림 띄우기
- 내 글에 댓글이 달렸을때 알림 띄우기
- 내가 등록한 TODO의 마감일정이 (t: 지정된 시간) 전일때 알림 띄우기

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
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```
