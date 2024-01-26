import recoil, { atom } from 'recoil';

export const authTokenAtom = atom({
    key : "authTokenAtom",
    default : ""
})