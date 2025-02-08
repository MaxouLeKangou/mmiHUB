export const useGithub = () => {

    const getContributors = async () => {
        const owner = "MaxouLeKangou";
        const repo = "mmiHUB";
        const url = `https://api.github.com/repos/${owner}/${repo}/contributors`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Erreur lors de la récupération des contributeurs");

            return await response.json();

        } catch (error) {
            console.error(error);
        }
    }

    return { getContributors };
};