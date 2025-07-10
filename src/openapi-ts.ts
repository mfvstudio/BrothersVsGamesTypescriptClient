import { createClient } from '@hey-api/openapi-ts'

createClient({
    input: '../BrothersVsGamesOpenApiSpec.yaml',
    output: 'src/client'
})
