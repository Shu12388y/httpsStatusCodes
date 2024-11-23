interface Information {
    continue: number;
    switchingProtocol: number;
    processing: number;
    earlyHints: number;
}

interface Success {
    ok: number;
    created: number;
    accepted: number;
    nonAuthoritative: number;
    noContent: number;
    resetContent: number;
    partialContent: number;
    multiStatus: number;
    alreadyReported: number;
    imUsed: number;
}

interface Redirection {
    multipleChoices: number;
    movedPermanently: number;
    found: number;
    seeOther: number;
    notModified: number;
    useProxy: number;
    unused: number;
    temporaryRedirect: number;
    permanentRedirect: number;
}

interface ClientError {
    badRequest: number;
    unauthorized: number;
    paymentRequired: number;
    forbidden: number;
    notFound: number;
    methodNotAllowed: number;
    notAcceptable: number;
    proxyAuthRequired: number;
    requestTimeout: number;
    conflict: number;
    gone: number;
    lengthRequired: number;
    preconditionFailed: number;
    payloadTooLarge: number;
    uriTooLong: number;
    unsupportedMediaType: number;
    rangeNotSatisfiable: number;
    expectationFailed: number;
    imATeapot: number;
    misdirectedRequest: number;
    unprocessableEntity: number;
    locked: number;
    failedDependency: number;
    tooEarly: number;
    upgradeRequired: number;
    preconditionRequired: number;
    tooManyRequests: number;
    requestHeaderFieldsTooLarge: number;
    unavailableForLegalReasons: number;
}

interface ServerError {
    internalServerError: number;
    notImplemented: number;
    badGateway: number;
    serviceUnavailable: number;
    gatewayTimeout: number;
    httpVersionNotSupported: number;
    variantAlsoNegotiates: number;
    insufficientStorage: number;
    loopDetected: number;
    notExtended: number;
    networkAuthRequired: number;
}

const Information: Information = {
    continue: 100,
    switchingProtocol: 101,
    processing: 102,
    earlyHints: 103,
};

const Success: Success = {
    ok: 200,
    created: 201,
    accepted: 202,
    nonAuthoritative: 203,
    noContent: 204,
    resetContent: 205,
    partialContent: 206,
    multiStatus: 207,
    alreadyReported: 208,
    imUsed: 226,
};

const Redirection: Redirection = {
    multipleChoices: 300,
    movedPermanently: 301,
    found: 302,
    seeOther: 303,
    notModified: 304,
    useProxy: 305,
    unused: 306,
    temporaryRedirect: 307,
    permanentRedirect: 308,
};

const ClientError: ClientError = {
    badRequest: 400,
    unauthorized: 401,
    paymentRequired: 402,
    forbidden: 403,
    notFound: 404,
    methodNotAllowed: 405,
    notAcceptable: 406,
    proxyAuthRequired: 407,
    requestTimeout: 408,
    conflict: 409,
    gone: 410,
    lengthRequired: 411,
    preconditionFailed: 412,
    payloadTooLarge: 413,
    uriTooLong: 414,
    unsupportedMediaType: 415,
    rangeNotSatisfiable: 416,
    expectationFailed: 417,
    imATeapot: 418,
    misdirectedRequest: 421,
    unprocessableEntity: 422,
    locked: 423,
    failedDependency: 424,
    tooEarly: 425,
    upgradeRequired: 426,
    preconditionRequired: 428,
    tooManyRequests: 429,
    requestHeaderFieldsTooLarge: 431,
    unavailableForLegalReasons: 451,
};

const ServerError: ServerError = {
    internalServerError: 500,
    notImplemented: 501,
    badGateway: 502,
    serviceUnavailable: 503,
    gatewayTimeout: 504,
    httpVersionNotSupported: 505,
    variantAlsoNegotiates: 506,
    insufficientStorage: 507,
    loopDetected: 508,
    notExtended: 510,
    networkAuthRequired: 511,
};



export {Information,Success,Redirection,ClientError,ServerError}