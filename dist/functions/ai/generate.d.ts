interface IAiGenerateOptions {
    prompt: string;
    speed: number;
}
export declare function aiGenerate(prompt: string, speed: number): Promise<void>;
export declare function aiGenerate(options: IAiGenerateOptions): Promise<void>;
export {};
//# sourceMappingURL=generate.d.ts.map