"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const create_dto_1 = require("./dto/create.dto");
const update_dto_1 = require("./dto/update.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getAllBooks() {
        return this.appService.findAllBooks();
    }
    getBook(id) {
        if (id < 1) {
            throw new common_1.BadRequestException('Id must be more 0');
        }
        return this.appService.findBookById(id);
    }
    async createBook(dto) {
        return await this.appService.createBook(dto);
    }
    async updateBook(id, dto) {
        if (id < 1) {
            throw new common_1.BadRequestException('Id must be more 0');
        }
        return this.appService.updateBook(id, dto);
    }
    async deleteBook(id) {
        if (id < 1) {
            throw new common_1.BadRequestException('Id must be more 0');
        }
        return this.appService.deleteBook(id);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('all-books'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAllBooks", null);
__decorate([
    (0, common_1.Get)('book/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getBook", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)('add-book'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createBook", null);
__decorate([
    (0, common_1.Put)('update-book/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_dto_1.UpdateDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateBook", null);
__decorate([
    (0, common_1.Delete)('delete-book/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteBook", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('library'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map