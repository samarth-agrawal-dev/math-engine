const changeToCrazy = (string: string) => {
    type characters = {
        A: string;
        B: string;
        C: string;
        D: string;
        E: string;
        F: string;
        G: string;
        H: string;
        I: string;
        J: string;
        K: string;
        L: string;
        M: string;
        N: string;
        O: string;
        P: string;
        Q: string;
        R: string;
        S: string;
        T: string;
        U: string;
        V: string;
        W: string;
        X: string;
        Y: string;
        Z: string;
        a: string;
        b: string;
        c: string;
        d: string;
        e: string;
        f: string;
        g: string;
        h: string;
        i: string;
        j: string;
        k: string;
        l: string;
        m: string;
        n: string;
        o: string;
        p: string;
        q: string;
        r: string;
        s: string;
        t: string;
        u: string;
        v: string;
        w: string;
        x: string;
        y: string;
        z: string;
    }
    const characters: characters = {
        "A" : "𝐀",
        "B" : "𝛃",
        "C" : "𝑪",
        "D" : "𝕯",
        "E" : "𝔼",
        "F" : "𝕱",
        "G" : "𝑮",
        "H" : "ℋ",
        "I" : "𝐈",
        "J" : "𝔍",
        "K" : "𝕶",
        "L" : "𝔏",
        "M" : "ℳ",
        "N" : "𝔑",
        "O" : "𝛺",
        "P" : "𝕻",
        "Q" : "ℚ",
        "R" : "𝕽",
        "S" : "𝕿",
        "T" : "𝐓",
        "U" : "𝖀",
        "V" : "𝐕",
        "W" : "𝗪",
        "X" : "𝖃",
        "Y" : "𝛹",
        "Z" : "ℤ",
        "a" : "𝑎",
        "b" : "𝑏",
        "c" : "𝑐",
        "d" : "𝑑",
        "e" : "𝑒",
        "f" : "𝑓",
        "g" : "𝑔",
        "h" : "𝒽",
        "i" : "𝒊",
        "j" : "𝑗",
        "k" : "𝒌",
        "l" : "𝑙",
        "m" : "𝑚",
        "n" : "𝑛",
        "o" : "𝑜",
        "p" : "𝓅",
        "q" : "𝓆",
        "r" : "𝑟",
        "s" : "𝒔",
        "t" : "𝑡",
        "u" : "𝑢",
        "v" : "𝑣",
        "w" : "𝑤",
        "x" : "𝒙",
        "y" : "𝑦",
        "z" : "𝑧"
    }
    let crazyStr = ""
    for (const char of string) {
        if (char in characters) {
            crazyStr+=characters[char as keyof characters]
        } else {
            crazyStr+=char
        }
    }
    return crazyStr;
}


export default changeToCrazy;