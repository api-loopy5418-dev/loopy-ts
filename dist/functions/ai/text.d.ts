interface IAiGenerateOptions {
    prompt: string;
    speed: number;
}
export declare function text(prompt: string, speed: number): Promise<any>;
export declare function text(options: IAiGenerateOptions): Promise<any>;
export {};
//# sourceMappingURL=text.d.ts.map