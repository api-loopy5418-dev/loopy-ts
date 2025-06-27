declare function loopyFetch(url: string, timeout: number, header?: Record<string, string>): Promise<any>;
declare namespace loopyFetch {
    var post: (url: string, timeout: number, body: Record<string, string>, header?: Record<string, string>) => Promise<any>;
}
export { loopyFetch };
//# sourceMappingURL=loopyFetch.d.ts.map