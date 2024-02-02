const apiGatewayId = 'zdj265n';
const awsRegion = 'us-east-2';

const config = {
  apiUrl: process.env.NODE_ENV === 'production'
    ? `https://${apiGatewayId}.execute-api.${awsRegion}.amazonaws.com/$default`
    : 'http://localhost:3001',
};

export default config;