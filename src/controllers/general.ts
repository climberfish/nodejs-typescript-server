const ping = (data) => ({ statusCode: 200 });
const notFound = (data) => ({ statusCode: 404 });

export default { notFound, ping };
