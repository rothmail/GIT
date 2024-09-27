"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchRelease = exports.BranchFeature = exports.BranchHotfix = exports.BranchDevelop = exports.branchMaster = exports.Branch = void 0;
var rl = require('readline-sync');
var Branch = /** @class */ (function () {
    function Branch(nome, dataCriacao) {
        this.commits = [];
        this.nome = nome;
        this.dataCriacao = dataCriacao;
    }
    Branch.prototype.criarCommit = function () {
        var frase = rl.question('Fale o que voce quer add no commit: ');
        this.commits.push(frase);
    };
    Branch.prototype.merge = function (outraBranch) {
        this.commits.concat(outraBranch.commits);
    };
    Branch.prototype.checkout = function () {
        var escolha = rl.questionInt('Qual branch voce quer escolher: ');
        return escolha;
    };
    Branch.prototype.mostrarHistorico = function () {
        console.log(this.commits);
    };
    return Branch;
}());
exports.Branch = Branch;
var branchMaster = /** @class */ (function (_super) {
    __extends(branchMaster, _super);
    function branchMaster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    branchMaster.prototype.criarBranch = function (nome, data) {
        var newBranch = new branchMaster(nome, data);
        return newBranch;
    };
    return branchMaster;
}(Branch));
exports.branchMaster = branchMaster;
var BranchDevelop = /** @class */ (function (_super) {
    __extends(BranchDevelop, _super);
    function BranchDevelop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BranchDevelop.prototype.finalizarSprint = function (branchRelease) {
        this.merge(branchRelease);
    };
    return BranchDevelop;
}(Branch));
exports.BranchDevelop = BranchDevelop;
var BranchHotfix = /** @class */ (function (_super) {
    __extends(BranchHotfix, _super);
    function BranchHotfix() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BranchHotfix.prototype.corrigirBug = function (descricao) {
        this.commits.push(descricao);
    };
    return BranchHotfix;
}(Branch));
exports.BranchHotfix = BranchHotfix;
var BranchFeature = /** @class */ (function (_super) {
    __extends(BranchFeature, _super);
    function BranchFeature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BranchFeature.prototype.implementaFuncionalidade = function (descricao) {
        this.commits.push(descricao);
    };
    return BranchFeature;
}(Branch));
exports.BranchFeature = BranchFeature;
var BranchRelease = /** @class */ (function (_super) {
    __extends(BranchRelease, _super);
    function BranchRelease() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BranchRelease.prototype.promoverParaProducao = function () {
        console.log("".concat(this.commits, " esta branch esta pronta pra ser lan\u00E7ada"));
    };
    return BranchRelease;
}(Branch));
exports.BranchRelease = BranchRelease;
