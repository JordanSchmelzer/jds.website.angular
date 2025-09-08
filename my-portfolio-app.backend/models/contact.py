from sqlmodel import SQLModel, Field


class Contact(SQLModel, table=True):
    id: int = Field(primary_key=True)
    full_name: str = Field()
    email_address: str = Field()
    first_contact_at: int = Field()
    last_contact_at: int = Field()
    count: int = Field()
    