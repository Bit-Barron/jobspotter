import React from "react";
import { Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { JobHook } from "../../../components/hooks/job-hook";

export default function JobDetails() {
  const { id } = useLocalSearchParams();
  const { jobQuery } = JobHook(id as string, "job-details");
  const job = jobQuery.data;
  console.log(job);

  return (
    <ScrollView>
      <Text>{job.data[0].job_title}</Text>
      <Text>{job.data[0].employer_name}</Text>
      <Text>{job.data[0].job_description}</Text>
      {/* Add more job details as needed */}
    </ScrollView>
  );
}
