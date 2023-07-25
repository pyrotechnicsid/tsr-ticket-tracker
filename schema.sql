CREATE TABLE current_status (
    tsr_ext int NOT NULL,
    tsr_name varchar(200),
    work_status boolean,
    ticket_number int,
    UNIQUE (tsr_ext)
);