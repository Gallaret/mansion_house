using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Smart.House.Data.Migrations
{
    public partial class addRemoteProperties : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FtpLogin",
                table: "Devices");

            migrationBuilder.DropColumn(
                name: "FtpMotionPath",
                table: "Devices");

            migrationBuilder.DropColumn(
                name: "FtpPassword",
                table: "Devices");

            migrationBuilder.AddColumn<string>(
                name: "RemoteAddress",
                table: "Devices",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RemoteLogin",
                table: "Devices",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RemotePassword",
                table: "Devices",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RemotePath",
                table: "Devices",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<string>(
                name: "FtpLogin",
                table: "Devices",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FtpMotionPath",
                table: "Devices",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FtpPassword",
                table: "Devices",
                nullable: true);
        }
    }
}
