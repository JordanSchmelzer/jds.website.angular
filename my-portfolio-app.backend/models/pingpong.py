from sqlmodel import SQLModel, Field


class PingPong(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    counter: int = Field(default=0)
