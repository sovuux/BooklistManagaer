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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("./database/database.service");
let AppService = class AppService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async findAllBooks() {
        const books = this.databaseService.books.findMany({
            orderBy: {
                id: "asc"
            }
        });
        if (!books) {
            throw new common_1.NotFoundException('No books found.');
        }
        return books;
    }
    async findBookById(id) {
        const book = this.databaseService.books.findUnique({
            where: { id }
        });
        if (!book) {
            throw new common_1.NotFoundException(`Book with ID - ${id} not found`);
        }
        return book;
    }
    async createBook(dto) {
        return this.databaseService.books.create({
            data: dto
        });
    }
    async updateBook(id, dto) {
        const book = this.databaseService.books.findUnique({
            where: { id }
        });
        if (!book) {
            throw new common_1.NotFoundException(`Book with ID - ${id} not found`);
        }
        return this.databaseService.books.update({
            where: { id },
            data: dto
        });
    }
    async deleteBook(id) {
        const book = await this.databaseService.books.delete({
            where: { id }
        });
        if (!book) {
            throw new common_1.NotFoundException(`Book with ID - ${id} not found`);
        }
        return this.databaseService.books.delete({
            where: { id }
        });
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AppService);
//# sourceMappingURL=app.service.js.map