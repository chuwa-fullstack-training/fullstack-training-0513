import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

interface ProfileData {
  avatar_url: string;
  name: string;
  location?: string;
  repos_url: string;
}

interface RepoData {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

const fetchData = async <T,>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }
  return response.json();
};

const UserDetailPage: React.FC = () => {
  const { login } = useParams<{ login: string }>();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (login) {
      setLoading(true);
      setError(null);
      const fetchProfileAndRepos = async () => {
        try {
          const profileData: ProfileData = await fetchData<ProfileData>(
            `https://api.github.com/users/${login}`
          );
          setProfile(profileData);

          const reposData: RepoData[] = await fetchData<RepoData[]>(
            profileData.repos_url
          );
          setRepos(reposData.slice(0, 3));
        } catch (error) {
          setError((error as Error).message);
        } finally {
          setLoading(false);
        }
      };

      fetchProfileAndRepos();
    }
  }, [login]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="col-6">
      {profile && (
        <div className="card">
          <div className="card-body text-center">
            <img
              src={profile.avatar_url}
              alt={profile.name}
              className="rounded-5 mb-3"
              style={{ height: "20vh" }}
            />
            <h4>{profile.name}</h4>
            <p>Location: {profile.location ? profile.location : "None"}</p>
            <h5>Repositories</h5>
            <ul className="list-unstyled">
              {repos.map((repo) => (
                <li key={repo.id} className="text-start">
                  <a href={repo.html_url}>{repo.name}</a>
                  <p>{repo.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetailPage;
