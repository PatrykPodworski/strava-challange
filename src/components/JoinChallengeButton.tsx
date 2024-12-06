import config from "@/utils/config";

const { STRAVA_CLIENT_ID, BASE_URL } = config;
const redirectUrl = `${BASE_URL}/auth/callback`;
const joinUrl = `https://www.strava.com/oauth/authorize?client_id=${STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}&approval_prompt=force&scope=read,activity:read`;

export const JoinChallengeButton = () => (
  <a
    href={joinUrl}
    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded text-center"
  >
    Join the challenge
  </a>
);
