interface Props {
    id: string;
    name: string;
    xp: number;
    level: number;
    isHitsound: boolean;
    isDuels: boolean;
    readonly email: string;
}

const User: Props = {
    id: "EE458W421C231AS3D21UUI",
    name: "Whellz",
    xp: 4450.05,
    level: 148,
    isHitsound: true,
    isDuels: false,
    email: "whellz@gmail.com"
}

console.log(User)