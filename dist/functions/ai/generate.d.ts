interface IAiGenerateOptions {
    prompt: string;
    speed: number;
}
export declare function aiGenerate(prompt: string, speed: number): Promise<any>;
export declare function aiGenerate(options: IAiGenerateOptions): Promise<any>;
export {};
//# sourceMappingURL=generate.d.ts.map