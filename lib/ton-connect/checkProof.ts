export const checkProof = (proofCandidate: string) => {
	const proof = process.env.TON_PROOF;

	return proof === proofCandidate;
};
