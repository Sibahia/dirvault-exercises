interface BasicInfo {
    name: string;
    email: string;
}

interface AddressInfo {
    street: string;
    city: string;
    zipCode: number;
}

type FullProfile = BasicInfo & AddressInfo;

const createProfile = (info: FullProfile): FullProfile & { id: number } => {
    return {
        id: Math.random(),
        ...info
    }
}

const newProfile = createProfile({
    name: "Maria",
    email: "m@gmail.com",
    street: "Av. Siempre Viva",
    city: "Springfield",
    zipCode: 12345
});

console.log(newProfile);