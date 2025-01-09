.PHONY: run-F
run-F: 
	@cd frontend && npm run dev

.PHONY: run-B
run-B:
	@cd backend && npm run dev

.PHONY: deploy-contract
deploy-contract:
	@cd blockchain && npm run deploy