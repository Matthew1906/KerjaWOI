'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function useFilters(){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const handleSearch = (query)=>{
        const params = new URLSearchParams(searchParams);
        if(query.length>0){
            params.set('query', query);
        }
        else{
            params.delete('query');
        }
        router.replace(`${pathname}?${params.toString()}`);
    }
    const handleFilters = (chosenFilters)=>{
        const params = new URLSearchParams(searchParams);
        if(chosenFilters.length>0){
            params.set('filters', chosenFilters.join(';'));
        }
        else {
            params.delete('filters');
        }
        router.replace(`${pathname}?${params.toString()}`);
    }
    return { handleSearch, handleFilters }
}