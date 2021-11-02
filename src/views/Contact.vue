<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Height
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gender
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mass
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(person, personIdx) in people" :key="person.name" :class="personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {{ person.name }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ person.height }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ person.gender }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ person.mass }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button @click="routeTo" class="text-indigo-600 hover:text-indigo-900">Edit</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, onMounted, ref} from "vue";
import axios from 'axios';
import {useRouter} from 'vue-router'

export default defineComponent({
  name: "Contact",

  setup(){
    const router = useRouter()
    const api = 'https://swapi.dev/api/people'

    let people = ref([
      // { name: 'Jane Cooper', title: 'Regional Paradigm Technician', role: 'Admin', email: 'jane.cooper@example.com' },
      // { name: 'Cody Fisher', title: 'Product Directives Officer', role: 'Owner', email: 'cody.fisher@example.com' },
    ])

    onMounted(() => {
      infiniteHandler()
    })

    function infiniteHandler() {
    console.log('444')
    axios.get(api)
        .then(function (response) {
          // handle success
          console.log(response.data.results);
          people.value = response.data.results
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
  }

  function routeTo(){
    console.log(111)
    router.push('/films')
  }


    return{
      people,
      infiniteHandler,
      routeTo
    }

  }
})
</script>
