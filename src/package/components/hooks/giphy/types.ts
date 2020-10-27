export interface GiphySearchResult {
    id: string;
    url: string;
    title: string;
    user?: {
        name: string;
        profileUrl: string;
    };
}
