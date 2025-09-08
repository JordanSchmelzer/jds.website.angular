from sqlmodel import SQLModel, Field


class Project(SQLModel, table=True):
    id: int = Field(primary_key=True)
    name: str = Field()
    description: str | None = Field()
    picture: str | None = Field()
    link: str | None = Field()