from sqlmodel import select, Session
from models import PingPong
from services.db import SessionDependency


def increment_counter(session: Session):
    """ Return row counter """
    statement = select(PingPong)
    counter_row = session.exec(statement=statement).first()
    if not counter_row:
        counter_row = PingPong(counter=1)
        session.add(counter_row)
    else:
        counter_row.counter+=1
    # Save the changes to the database.
    session.commit() 
    # Refresh the object from the db to ensure it has the latest data.
    session.refresh(counter_row)
    # JSON response to client
    return counter_row
