const searchSkills = async (search: string) => {
    const params = new URLSearchParams({q: search});
    const response = await fetch(`${params}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export { 
    searchSkills,
}
