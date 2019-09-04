# For Future Reference re:db

## Starting the virtual environment

1. Navigate to the db directory with

```git
cd var/www/React*/react*/db
```

2. Startup the python venv with...

```git
source venv/bin/activate
```

3. Shutdown the python venv with...

```git
deactivate
```

### Environment pip contents for py

|Package   |      Version|
|:-----------:|:-------------:|
certifi|2019.6.16
chardet         |3.0.4
Click         |  7.0
Flask           |1.1.1
Flask-SeaSurf   |0.2.2
httplib2        0|.13.1
idna          |  2.8
itsdangerous    |1.1.0
Jinja2          2|.10.1
MarkupSafe      |1.1.1
oauth2client    |4.1.3
pip             1|9.2.2
psycopg2-binary |2.8.3
pyasn1          |0.4.6
pyasn1-modules  |0.2.6
requests        2|.22.0
rsa           |  4.0
setuptools      4|1.2.0
six             1|.12.0
SQLAlchemy      |1.3.7
urllib3         1|.25.3
Werkzeug        0|.15.5
wheel           0|.33.6

## Important Commands for DB usage

```python 
engine = create_engine(
    'postgresql://dbmasteruser:App7es33d3@ls-e9e904cbd1d72e94cc0308f47888188ba6518912.cjncqsyxcvft.ca-central-1.rds.amazonaws.com:5432/dbreaderapp')
```

## Files

1. database_setup.py
2. lotsofmenus.py

```python
python database_setup.py 
```
Used to setup the database schema, tweak to recreate new schema.

```python 
python lotsofmenus.py
```
Used to populate the database with records from a file containing formatted entries as records that are injected into the database after it's schema is created with database_setup.py schema creation file.

## Connecting to an Amazon RDS PostgreSQL Instance
The general format for using psql to connect is shown following.

```git
psql "host=hostName port=portNumber sslmode=verify-full sslrootcert=certificateFile dbname=DBName user=userName"
```
The parameters are as follows
|Parameter|Description|
|:-----------|:---------:|
host | The host name of the DB instance that you want to access.
port | The port number used for connecting to your DB instance.
sslmode | The SSL mode to use. When you use sslmode=verify-full, the SSL connection verifies the DB instance endpoint against the endpoint in the SSL certificate.
sslrootcert | The SSL certificate file that contains the public key. For more information, see Using SSL with a PostgreSQL DB Instance.
dbname | The database that you want to access.
user | The database account that you want to access.

The following example shows using the command to connect. The example uses the environment variables that were set when the token was generated in the previous section.

```git
psql "host=$RDSHOST port=5432 sslmode=verify-full sslrootcert=/sample_dir/rds-combined-ca-bundle.pem dbname=DBName user=jane_doe"
```
