export interface AsepriteSheet {
    frames: Record<string, AsepriteFrameData>;
    meta: AsepriteMeta;
}

export interface AsepriteFrameData {
    frame: Rect;
    rotated: boolean;
    trimmed: boolean;
}

export interface AsepriteMeta {
    app: string;
    version: string;
    image: string;
    format: string;
    size: Size;
    scale: string;
}

export interface Rect {
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface Size {
    w: number;
    h: number;
}