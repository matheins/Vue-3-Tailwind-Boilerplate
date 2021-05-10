import axios from 'axios'

abstract class BaseApiService {
  baseUrl = process.env.VUE_APP_API_BASE
  resource: string

  constructor(resource: string) {
    if (!resource) throw new Error('Resource is not provided')
    this.resource = resource
  }

  getUrl(id = ''): string {
    return `${this.baseUrl}/${this.resource}/${id}`
  }

  handleErrors(err: unknown): unknown {
    // Note: here you may want to add your errors handling
    console.log({ message: 'Errors is handled here', err })
    return err
  }
}

export class ReadOnlyApiService<T> extends BaseApiService {
  constructor(resource: string) {
    super(resource)
  }
  async fetch(config = {}): Promise<T[]> {
    const response = await axios.get<T[]>(this.getUrl(), config)
    return response.data
  }
  async get(id: string): Promise<T> {
    if (!id) throw Error('Id is not provided')
    const response = await axios.get<T>(this.getUrl(id))
    return response.data
  }
}

export class ModelApiService<T> extends ReadOnlyApiService<T> {
  constructor(resource: string) {
    super(resource)
  }
  async post(data: T): Promise<T> {
    const response = await axios.post<T>(this.getUrl(), data)
    return response.data
  }
  async put(id: string, data: T): Promise<T> {
    if (!id) throw Error('Id is not provided')
    const response = await axios.put<T>(this.getUrl(id), data)
    return response.data
  }
  async delete(id: string): Promise<unknown> {
    if (!id) throw Error('Id is not provided')
    const response = axios.delete(this.getUrl(id))
    return response
  }
}
