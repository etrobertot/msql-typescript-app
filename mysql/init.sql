/*CREATE database typescript_db;*/

use typescript_db;

/*==============================================================*/
/* Table: AUTHOR                                                */
/*==============================================================*/
create table author
(
   dni                  int not null,
   name                 varchar(50) not null,
   last_name            varchar(50) not null,
   primary key (dni)
);

/*==============================================================*/
/* Table: POSTS                                                 */
/*==============================================================*/
create table posts
(
   id                   int not null,
   dni                  int,
   title                varchar(50) not null,
   description          text not null,
   image_url            text,
   created_at           TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   primary key (id)
);

alter table posts add constraint FK_REFERENCE_1 foreign key (dni)
      references author (dni) on delete restrict on update restrict;

