from sqlmodel import SQLModel, Field


class Job(SQLModel, table=True):
    id: int = Field(primary_key=True)
    job_title: str = Field()
    company_title: str = Field()
    start_date: int = Field()
    end_date: int | None = Field(default=None)
    content: str | None = Field(default=None)