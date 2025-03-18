// ignore this function for now. We'll go over it
// on Wednesday:
async function fetchCourses() {
  const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2025/spring/`;
  courseList = await fetch(url).then((response) => response.json());
  displayResults(courseList);
}

function displayResults(courses) {
  // your code here.
  let resultsDiv = document.querySelector("#results");
  resultsDiv.innerHTML = ""; // Clear previous results

  // Loop through courses and filter only CSCI department courses
  courses.forEach((course) => {
    if (course.Department === "CSCI") {
      let courseHTML = `
                <section class="course">
                    <h3>${course.CourseNum}: ${course.Title}</h3>
                    <ul>
                        <li><strong>Instructor:</strong> ${
                          course.Instructors[0].Name || "TBA"
                        }</li>
                        <li><strong>Location:</strong> ${
                          course.Location.FullLocation || "Online"
                        }</li>
                        <li><strong>Days:</strong> ${course.Days || "TBA"}</li>
                    </ul>
                </section>
            `;
      resultsDiv.innerHTML += courseHTML;
    }
  });

  if (resultsDiv.innerHTML === "") {
    resultsDiv.innerHTML = `<p>No CSCI courses found for this term.</p>`;
  }
}
