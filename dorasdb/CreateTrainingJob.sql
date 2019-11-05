CREATE TABLE TrainingJob(
    tid int PRIMARYKEY NOT NULL,
    jid int PRIMARYKEY NOT NULL,

    FOREIGN KEY (tid) REFERENCES Training(tid)
    FOREIGN KEY (jid) REFERENCES Job(jid)
)