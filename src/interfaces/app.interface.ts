import { AppPagePaths, IconIds, SafeLinkApps } from '../enums'

export interface InterfaceAppLink {
    name: string
    path: AppPagePaths
    icon?: IconIds
    enabled: boolean
    description?: string
    sublinks: InterfaceAppLink[]
}

export interface APIResponse<Data> {
    data?: Data
    error: string
}

export interface SafeLink {
    app: SafeLinkApps
    url: string
    name: string
    iconUrl: string
    bannerUrl: string
    description: string
    tags: string[]
    socialProfiles: {
        platform: string
        url: string
    }[]
}
