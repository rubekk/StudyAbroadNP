import type { CoursesResponse, Course, CourseResponse } from "../types/course";
import coursesJson from "../data/courses.json"

const getAllCourses = async (): Promise<CoursesResponse> => {
    try {
        const coursesData: Course[] = coursesJson;

        return {
            data: coursesData
        };
    } catch (error: any) {
        console.error("Error accessing courses data:", error);
        return { error: error.message };
    }
};

const getCourseBySlug = async (slug: string): Promise<CourseResponse> => {
    try {
        const coursesData = await getAllCourses();

        if (coursesData.error) {
            throw new Error(coursesData.error);
        }

        const courseBySlug = coursesData.data?.find((course) => course.slug === slug);

        if (!courseBySlug) {
            throw new Error("Course not found");
        }

        return {
            data: courseBySlug
        };
    } catch (error: any) {
        return { error: error.message };
    }
};

export {
    getAllCourses,
    getCourseBySlug
}