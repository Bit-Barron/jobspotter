import React from "react";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, View, Linking, Image } from "react-native";
import { JobHook } from "~/components/hooks/job-hook";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";

interface JobData {
  employer_logo: string | null;
  job_title: string;
  employer_name: string;
  job_city: string;
  job_state: string;
  job_country: string;
  job_employment_type: string;
  job_min_salary: number;
  job_max_salary: number;
  job_description: string;
  job_highlights?: {
    qualifications?: string[];
  };
  job_benefits?: string[];
  job_apply_link: string;
}

interface JobQueryResult {
  data?: {
    data: JobData[];
  };
  isLoading: boolean;
  isError: boolean;
}

const JobDetails: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { jobQuery } = JobHook(id, "job-details") as {
    jobQuery: JobQueryResult;
  };

  if (jobQuery.isLoading) {
    return <Text>Loading...</Text>;
  }

  if (jobQuery.isError) {
    return <Text>Error loading job details</Text>;
  }

  const job = jobQuery.data?.data[0];

  if (!job) {
    return <Text>No job data available</Text>;
  }

  const renderListItem = (
    label: string,
    value: string | number | null | undefined
  ) => (
    <View className="mb-2">
      <Text className="font-bold">{label}:</Text>
      <Text>{value !== null && value !== undefined ? value : "N/A"}</Text>
    </View>
  );

  return (
    <ScrollView className="p-4 mt-5">
      <Image
        source={{ uri: job.employer_logo || "https://via.placeholder.com/150" }}
        className="w-20 h-20 mb-4"
      />
      <Text className="text-2xl font-bold mb-4">{job.job_title}</Text>
      {renderListItem("Company", job.employer_name)}
      {renderListItem(
        "Location",
        `${job.job_city}, ${job.job_state}, ${job.job_country}`
      )}
      {renderListItem("Employment Type", job.job_employment_type)}
      {renderListItem(
        "Salary Range",
        `$${job.job_min_salary} - $${job.job_max_salary}`
      )}

      <Text className="font-bold mt-4 mb-2">Job Description:</Text>
      <Text>{job.job_description}</Text>

      <View className="mb-5 mt-4">
        {job.job_apply_link && (
          <Button
            className="text-blue-500 underline"
            onPress={() => Linking.openURL(job.job_apply_link)}
          >
            <Text>Apply Now</Text>
          </Button>
        )}
      </View>
    </ScrollView>
  );
};

export default JobDetails;
