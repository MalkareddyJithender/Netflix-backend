const dotenv = require('dotenv');

//initially value is undefined. so development value is stored in the development environment...
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV === 'development')
{
    dotenv.config({path:'.env.development'});
}
else if(process.env.NODE_ENV === 'test')
{
    dotenv.config({path:'.env.test'});
};
