using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Smart.House.Data.Migrations
{
    public partial class renameDeviceProperties : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RemoteAddress",
                table: "Devices");

            migrationBuilder.DropColumn(
                name: "RemoteLogin",
                table: "Devices");

            migrationBuilder.DropColumn(
                name: "RemotePassword",
                table: "Devices");

            migrationBuilder.DropColumn(
                name: "RemotePath",
                table: "Devices");

            migrationBuilder.AddColumn<int>(
                name: "StorageType",
                table: "Devices",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Devices",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Login",
                table: "Devices",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Devices",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Path",
                table: "Devices",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Storekeeper_StorageType",
                table: "Devices",
                type: "int",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StorageType",
                table: "Devices");

            migrationBuilder.DropColumn(
                name: "Address",
                table: "Devices");

            migrationBuilder.DropColumn(
                name: "Login",
                table: "Devices");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "Devices");

            migrationBuilder.DropColumn(
                name: "Path",
                table: "Devices");

            migrationBuilder.DropColumn(
                name: "Storekeeper_StorageType",
                table: "Devices");

            migrationBuilder.AddColumn<string>(
                name: "RemoteAddress",
                table: "Devices",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RemoteLogin",
                table: "Devices",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RemotePassword",
                table: "Devices",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RemotePath",
                table: "Devices",
                nullable: true);
        }
    }
}
