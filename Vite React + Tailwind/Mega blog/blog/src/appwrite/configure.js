import config from '../config/config'
import {Client, ID, Storage, Databases, Query} from 'appwrite'

export class Service {
    client = new Client()
    databases;
    storage;

    constructor() {
        this.client
                .setEndpoint(config.appwriteUrl)
                .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, userId, status}) {
        try {
            await this.databases.createDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug,
                {
                   title,
                   content,
                   userId,
                   featuredImage,
                   status
                }
           )
        } catch (error) {
            console.log('configure | create post', error)
        }
    }

    // update, delete, getPost, getPosts

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            await this.databases.updateDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug,
                {
                   title,
                   content,
                   featuredImage,
                   status
                }
            )
        } catch (error) {
            console.log('configure | update post', error)
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug)
            return true
        } catch (error) {
            console.log('configure | delete post', error)
        }
        return false
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug)
        } catch (error) {
            console.log('configure | get post', error)
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(config.appwriteDatabaseId, config.appwriteCollectionId, queries)
            // we can also give queries here instead of 'queries in array'
        } catch (error) {
            console.log('configure | get posts', error)
            return false;
        }
    }

    // file upload service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(config.appwriteBucketId,
             ID.unique(), file)
        } catch (error) {
            console.log('configure | upload file', error)
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(config.appwriteBucketId, fileId)
            return true;
        } catch (error) {
            console.log('configure | delete file', error)
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(config.appwriteBucketId, fileId)
    }


}

const service = new Service()

export default service