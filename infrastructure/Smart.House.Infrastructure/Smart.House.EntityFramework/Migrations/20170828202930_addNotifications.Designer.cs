﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Smart.House.Data.Model;
using System;

namespace Smart.House.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20170828202930_addNotifications")]
    partial class addNotifications
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452")
                .HasAnnotation("Relational:Sequence:.EntityFrameworkHiLoSequence", "'EntityFrameworkHiLoSequence', '', '1', '10', '', '', 'Int64', 'False'")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Smart.House.Domain.Entities.Device", b =>
                {
                    b.Property<string>("Identifier")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("AmbientNotificationEnabled");

                    b.Property<bool>("EmailNotificationEnabled");

                    b.Property<string>("Producent");

                    b.Property<bool>("SmsNotificationEnabled");

                    b.Property<bool>("SoundNotificationEnabled");

                    b.Property<string>("device_type")
                        .IsRequired();

                    b.HasKey("Identifier");

                    b.ToTable("Devices");

                    b.HasDiscriminator<string>("device_type").HasValue("device_base");
                });

            modelBuilder.Entity("Smart.House.Domain.Entities.Harmonogram", b =>
                {
                    b.Property<string>("Identifier");

                    b.Property<int>("Type");

                    b.Property<bool>("Friday");

                    b.Property<TimeSpan>("From");

                    b.Property<bool>("IsActive");

                    b.Property<bool>("Monday");

                    b.Property<bool>("Saturday");

                    b.Property<bool>("Sunday");

                    b.Property<bool>("Thursday");

                    b.Property<TimeSpan>("To");

                    b.Property<bool>("Tuesday");

                    b.Property<bool>("Wednesday");

                    b.HasKey("Identifier", "Type");

                    b.ToTable("Harmonograms");
                });

            modelBuilder.Entity("Smart.House.Notification.Entities.Notification", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:HiLoSequenceName", "EntityFrameworkHiLoSequence")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.SequenceHiLo);

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Description");

                    b.Property<int>("Type");

                    b.Property<bool>("Unchecked");

                    b.Property<string>("Value");

                    b.HasKey("Id");

                    b.ToTable("Notifications");
                });

            modelBuilder.Entity("Smart.House.Camera.Entities.Camera", b =>
                {
                    b.HasBaseType("Smart.House.Domain.Entities.Device");

                    b.Property<string>("FtpLogin");

                    b.Property<string>("FtpMotionPath");

                    b.Property<string>("FtpPassword");

                    b.Property<bool>("MotionDetectionEnabled");

                    b.ToTable("Camera");

                    b.HasDiscriminator().HasValue("device_camera");
                });

            modelBuilder.Entity("Smart.House.Domain.Entities.Harmonogram", b =>
                {
                    b.HasOne("Smart.House.Domain.Entities.Device", "Device")
                        .WithMany("Harmonograms")
                        .HasForeignKey("Identifier")
                        .HasConstraintName("ForeignKey_Harmonogram_Device")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
