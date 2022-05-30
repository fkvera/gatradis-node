const constants = {
    endpoints: {
        pdfConverter: '/api/convert'
    },
    env: {
        storageConnectionString:'AZURE_STORAGE_CONNECTION',
        storageAccount:'AZURE_ACCOUNT_NAME',
        storageContainer:'AZURE_CONTAINER_NAME'
    },
    urls: {
        azureFileUrl: 'https://{ACCOUNT}.blob.core.windows.net/{CONTAINER}/{FILE}'
    },
    keys: {
        account: '{ACCOUNT}',
        container: '{CONTAINER}',
        file: '{FILE}',
        contentTypePdf: 'application/pdf'
    },
    http: {
        bad_request: 400,
        success: 200,
        error: 500
    },
    errors: {
        converterValidation: 'You must provide a valid URL and file name for conversion'
    }
}

export default constants;