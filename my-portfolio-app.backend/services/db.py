from sqlmodel import Session, create_engine, SQLModel
from fastapi import Depends
from typing import Annotated


""" SqlLite rejects connections from the same thread by default.
    This FastAPI app should handle requests concurrently.
"""
sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///data/{sqlite_file_name}"
connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, connect_args=connect_args)


def create_db_and_tables():
    """ This function uses the metadata from all defined SQLModel classes
    to create tables in the database.
    Its called once at startup to ensure the schema is ready.
    """
    SQLModel.metadata.create_all(engine)
    
    
def get_session():
    """ 
    Generator function that will be used as a dependency. 
    Creates a new session on every request and ensures it closes. 
    FastAPI will hand session off to calling code. When calling
    code is done, yield resumes. Since no code below this exits
    with block gracefully closing the connection.
    """
    with Session(engine) as session:
        yield session
        
        
SessionDependency = Annotated[Session, Depends(get_session)]

