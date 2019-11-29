"""initial

Revision ID: 743ed1568459
Revises: 4967a90e7f83
Create Date: 2019-11-28 15:57:02.047950

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '743ed1568459'
down_revision = '4967a90e7f83'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('email', sa.String(), nullable=True))
    op.add_column('users', sa.Column('pass_secure', sa.String(), nullable=True))
    op.create_index(op.f('ix_users_username'), 'users', ['username'], unique=False)
    op.create_unique_constraint(None, 'users', ['email'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'users', type_='unique')
    op.drop_index(op.f('ix_users_username'), table_name='users')
    op.drop_column('users', 'pass_secure')
    op.drop_column('users', 'email')
    # ### end Alembic commands ###