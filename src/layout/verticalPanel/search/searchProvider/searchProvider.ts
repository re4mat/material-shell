/* exported loadRemoteSearchProviders */
import GLib from 'gi://GLib';
import St from 'gi://St';
import { AppSearchProvider } from './AppSearchProvider';
import { RecentSearchProvider } from './RecentSearchProvider';
import { RemoteSearchProvider } from './RemoteSearchProvider';

export interface RawMeta {
    [prop: string]: GLib.Variant;
}

export interface UnpackedMeta {
    [prop: string]: any;
    id?: string;
    name?: string;
    icon?: GLib.Variant;
    gicon?: string;
    description?: string;
    clipboardText?: string;
}

export interface ResultMeta {
    id: string;
    name: string;
    createIcon: (size: number) => St.Icon | null;
    description?: string;
    clipboardText?: string;
}

export type SearchProvider = AppSearchProvider | RemoteSearchProvider;

export type ReactiveSearchProvider = SearchProvider | RecentSearchProvider;
