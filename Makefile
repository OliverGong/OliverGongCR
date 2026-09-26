.PHONY: install dev infra-up infra-down lint test build verify
install:
	pnpm install

dev:
	pnpm --filter @resume-studio/web dev

infra-up:
	docker compose -f deploy/compose/compose.dev.yml up -d

infra-down:
	docker compose -f deploy/compose/compose.dev.yml down

lint:
	pnpm lint
	mvn spotless:check checkstyle:check spotbugs:check

test:
	pnpm test
	mvn test

build:
	pnpm build
	mvn package -DskipTests

verify:
	pnpm lint
	pnpm test
	pnpm build
	mvn verify
